'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type CompositionEvent as ReactCompositionEvent,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';

import styles from './keyboard-playground.module.css';

type KeyDefinition = {
  code: string;
  label: string;
  output?: string;
  width?: number;
};

const MAX_SAMPLE_LENGTH = 160;

const KEY_ROWS: KeyDefinition[][] = [
  [
    { code: 'Escape', label: 'Esc' },
    { code: 'Digit1', label: '1', output: '1' },
    { code: 'Digit2', label: '2', output: '2' },
    { code: 'Digit3', label: '3', output: '3' },
    { code: 'Digit4', label: '4', output: '4' },
    { code: 'Digit5', label: '5', output: '5' },
    { code: 'Digit6', label: '6', output: '6' },
    { code: 'Digit7', label: '7', output: '7' },
    { code: 'Digit8', label: '8', output: '8' },
    { code: 'Digit9', label: '9', output: '9' },
    { code: 'Digit0', label: '0', output: '0' },
    { code: 'Minus', label: '−', output: '-' },
    { code: 'Equal', label: '=', output: '=' },
    { code: 'Backslash', label: '\\', output: '\\' },
    { code: 'Backquote', label: '`', output: '`' },
  ],
  [
    { code: 'Tab', label: 'Tab', width: 1.5 },
    { code: 'KeyQ', label: 'Q', output: 'q' },
    { code: 'KeyW', label: 'W', output: 'w' },
    { code: 'KeyE', label: 'E', output: 'e' },
    { code: 'KeyR', label: 'R', output: 'r' },
    { code: 'KeyT', label: 'T', output: 't' },
    { code: 'KeyY', label: 'Y', output: 'y' },
    { code: 'KeyU', label: 'U', output: 'u' },
    { code: 'KeyI', label: 'I', output: 'i' },
    { code: 'KeyO', label: 'O', output: 'o' },
    { code: 'KeyP', label: 'P', output: 'p' },
    { code: 'BracketLeft', label: '[', output: '[' },
    { code: 'BracketRight', label: ']', output: ']' },
    { code: 'Backspace', label: 'Backspace', width: 1.5 },
  ],
  [
    { code: 'CapsLock', label: 'Control', width: 1.75 },
    { code: 'KeyA', label: 'A', output: 'a' },
    { code: 'KeyS', label: 'S', output: 's' },
    { code: 'KeyD', label: 'D', output: 'd' },
    { code: 'KeyF', label: 'F', output: 'f' },
    { code: 'KeyG', label: 'G', output: 'g' },
    { code: 'KeyH', label: 'H', output: 'h' },
    { code: 'KeyJ', label: 'J', output: 'j' },
    { code: 'KeyK', label: 'K', output: 'k' },
    { code: 'KeyL', label: 'L', output: 'l' },
    { code: 'Semicolon', label: ';', output: ';' },
    { code: 'Quote', label: "'", output: "'" },
    { code: 'Enter', label: 'Enter', width: 2.25 },
  ],
  [
    { code: 'ShiftLeft', label: 'Shift', width: 2.25 },
    { code: 'KeyZ', label: 'Z', output: 'z' },
    { code: 'KeyX', label: 'X', output: 'x' },
    { code: 'KeyC', label: 'C', output: 'c' },
    { code: 'KeyV', label: 'V', output: 'v' },
    { code: 'KeyB', label: 'B', output: 'b' },
    { code: 'KeyN', label: 'N', output: 'n' },
    { code: 'KeyM', label: 'M', output: 'm' },
    { code: 'Comma', label: ',', output: ',' },
    { code: 'Period', label: '.', output: '.' },
    { code: 'Slash', label: '/', output: '/' },
    { code: 'ShiftRight', label: 'Shift', width: 1.75 },
    { code: 'Fn', label: 'Fn' },
  ],
  [
    { code: 'AltLeft', label: 'Alt', width: 1.5 },
    { code: 'MetaLeft', label: 'Super', width: 1.5 },
    { code: 'Space', label: '', output: ' ', width: 6 },
    { code: 'MetaRight', label: 'Super', width: 1.5 },
    { code: 'AltRight', label: 'Alt', width: 1.5 },
  ],
];

function accessibleKeyName(key: KeyDefinition) {
  if (key.code === 'Space') return 'Space';
  if (key.code === 'Backslash') return 'Backslash';
  return key.label;
}

function graphemeSegments(value: string) {
  if (typeof Intl.Segmenter === 'function') {
    return Array.from(
      new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(value),
    );
  }

  let index = 0;
  return Array.from(value, (segment) => {
    const result = { index, segment };
    index += segment.length;
    return result;
  });
}

function limitGraphemes(value: string, limit: number) {
  const segments = graphemeSegments(value);
  if (segments.length <= limit) return value;
  const boundary = segments[limit]?.index ?? value.length;
  return value.slice(0, boundary);
}

function reconcileSample(previous: string, next: string) {
  const previousSegments = graphemeSegments(previous);
  const nextSegments = graphemeSegments(next);

  if (nextSegments.length <= MAX_SAMPLE_LENGTH) return next;
  if (previousSegments.length > MAX_SAMPLE_LENGTH) {
    return limitGraphemes(next, MAX_SAMPLE_LENGTH);
  }

  let prefixLength = 0;
  while (
    prefixLength < previousSegments.length &&
    prefixLength < nextSegments.length &&
    previousSegments[prefixLength].segment === nextSegments[prefixLength].segment
  ) {
    prefixLength += 1;
  }

  let previousSuffixStart = previousSegments.length;
  let nextSuffixStart = nextSegments.length;
  while (
    previousSuffixStart > prefixLength &&
    nextSuffixStart > prefixLength &&
    previousSegments[previousSuffixStart - 1].segment ===
      nextSegments[nextSuffixStart - 1].segment
  ) {
    previousSuffixStart -= 1;
    nextSuffixStart -= 1;
  }

  const prefix = nextSegments.slice(0, prefixLength);
  const suffix = nextSegments.slice(nextSuffixStart);
  const available = Math.max(
    0,
    MAX_SAMPLE_LENGTH - prefix.length - suffix.length,
  );
  const insertion = nextSegments.slice(prefixLength, nextSuffixStart).slice(0, available);
  return [...prefix, ...insertion, ...suffix].map(({ segment }) => segment).join('');
}

function previousGraphemeStart(value: string, caret: number) {
  const segments = graphemeSegments(value.slice(0, caret));
  return segments.at(-1)?.index ?? 0;
}

function closeContext(context: AudioContext) {
  if (context.state === 'closed') return;
  try {
    void context.close().catch(() => undefined);
  } catch {
    // Some browser implementations can throw while an audio context is starting.
  }
}

function isDisplayedKeyPressed(code: string, pressedCodes: Set<string>) {
  if (code === 'CapsLock') {
    return (
      pressedCodes.has('CapsLock') ||
      pressedCodes.has('ControlLeft') ||
      pressedCodes.has('ControlRight')
    );
  }
  return pressedCodes.has(code);
}

export function KeyboardPlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const [sample, setSample] = useState('');
  const [pressedCodes, setPressedCodes] = useState<Set<string>>(() => new Set());
  const [rovingCode, setRovingCode] = useState('KeyF');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundUnavailable, setSoundUnavailable] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const keyRefs = useRef<(HTMLButtonElement | null)[][]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mountedRef = useRef(true);
  const composingRef = useRef(false);
  const boundedSampleRef = useRef('');

  const clearPressed = useCallback(() => setPressedCodes(new Set()), []);

  const closeAudio = useCallback(() => {
    const context = audioContextRef.current;
    audioContextRef.current = null;
    setSoundEnabled(false);
    if (context) closeContext(context);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) clearPressed();
    };

    mountedRef.current = true;
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', clearPressed);
    return () => {
      mountedRef.current = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', clearPressed);
      const context = audioContextRef.current;
      audioContextRef.current = null;
      if (context) closeContext(context);
    };
  }, [clearPressed]);

  const playClick = useCallback(() => {
    const context = audioContextRef.current;
    if (!soundEnabled || !context || context.state !== 'running') return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(145, now);
    oscillator.frequency.exponentialRampToValueAtTime(82, now + 0.026);
    gain.gain.setValueAtTime(0.025, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
    oscillator.start(now);
    oscillator.stop(now + 0.03);
  }, [soundEnabled]);

  const toggleSound = async () => {
    if (audioContextRef.current) {
      closeAudio();
      return;
    }

    let context: AudioContext | undefined;
    try {
      if (typeof AudioContext === 'undefined') {
        setSoundUnavailable(true);
        return;
      }

      context = new AudioContext();
      audioContextRef.current = context;
      await context.resume();

      if (audioContextRef.current !== context || !mountedRef.current) {
        closeContext(context);
        return;
      }

      setSoundUnavailable(false);
      setSoundEnabled(true);
    } catch {
      const stillCurrent = context === undefined || audioContextRef.current === context;
      if (context) {
        if (stillCurrent) audioContextRef.current = null;
        closeContext(context);
      }

      if (!stillCurrent || !mountedRef.current) return;
      setSoundUnavailable(true);
      setSoundEnabled(false);
    }
  };

  const toggleOpen = () => {
    if (isOpen) {
      clearPressed();
      closeAudio();
    }
    setIsOpen(!isOpen);
  };

  const handleTypingKeyDown = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.nativeEvent.isComposing || event.key === 'Process') return;
    if (!event.repeat) {
      setPressedCodes((current) => new Set(current).add(event.code));
      if (!event.metaKey && !event.ctrlKey && !event.altKey) playClick();
    }
  };

  const handleTypingKeyUp = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    setPressedCodes((current) => {
      const next = new Set(current);
      next.delete(event.code);
      return next;
    });
  };

  const handleSampleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (composingRef.current) {
      setSample(event.target.value);
      return;
    }

    const nextSample = reconcileSample(boundedSampleRef.current, event.target.value);
    boundedSampleRef.current = nextSample;
    setSample(nextSample);
  };

  const handleCompositionEnd = (event: ReactCompositionEvent<HTMLTextAreaElement>) => {
    composingRef.current = false;
    const nextSample = reconcileSample(
      boundedSampleRef.current,
      event.currentTarget.value,
    );
    boundedSampleRef.current = nextSample;
    setSample(nextSample);
  };

  const insertFromKey = (key: KeyDefinition) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let nextValue = sample;
    let nextCaret = start;

    if (key.code === 'Backspace') {
      const removeFrom = start === end ? previousGraphemeStart(sample, start) : start;
      nextValue = sample.slice(0, removeFrom) + sample.slice(end);
      nextCaret = removeFrom;
    } else {
      const output = key.code === 'Enter' ? '\n' : key.output;
      if (output === undefined) return;
      const before = sample.slice(0, start);
      const after = sample.slice(end);
      const available = Math.max(
        0,
        MAX_SAMPLE_LENGTH - graphemeSegments(before + after).length,
      );
      const inserted = limitGraphemes(output, available);
      nextValue = before + inserted + after;
      nextCaret = start + inserted.length;
    }

    boundedSampleRef.current = nextValue;
    setSample(nextValue);
    requestAnimationFrame(() => textarea.setSelectionRange(nextCaret, nextCaret));
    playClick();
  };

  const moveRovingFocus = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    rowIndex: number,
    keyIndex: number,
  ) => {
    let targetRow = rowIndex;
    let targetKey = keyIndex;

    switch (event.key) {
      case 'ArrowLeft':
        targetKey = Math.max(0, keyIndex - 1);
        break;
      case 'ArrowRight':
        targetKey = Math.min(KEY_ROWS[rowIndex].length - 1, keyIndex + 1);
        break;
      case 'ArrowUp':
        targetRow = Math.max(0, rowIndex - 1);
        targetKey = Math.min(KEY_ROWS[targetRow].length - 1, keyIndex);
        break;
      case 'ArrowDown':
        targetRow = Math.min(KEY_ROWS.length - 1, rowIndex + 1);
        targetKey = Math.min(KEY_ROWS[targetRow].length - 1, keyIndex);
        break;
      default:
        return;
    }

    event.preventDefault();
    const target = KEY_ROWS[targetRow][targetKey];
    setRovingCode(target.code);
    keyRefs.current[targetRow]?.[targetKey]?.focus();
  };

  return (
    <div className={styles.playground}>
      <div className={styles.hardwareLine}>
        <button
          type='button'
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls='keyboard-playground-panel'
          onClick={toggleOpen}
        >
          Neo60 CU (HHKB)
          <span className={styles.tryIt} aria-hidden='true'>
            {isOpen ? 'close' : 'try it'}
          </span>
        </button>
        <span aria-hidden='true'> · </span>
        <span>Cherry MX Black · DCS · MX Master 3S</span>
      </div>

      {isOpen ? (
        <div id='keyboard-playground-panel' className={styles.panel}>
          <label className={styles.inputLabel} htmlFor='keyboard-playground-input'>
            Type here to press the matching physical keys
          </label>
          <textarea
            ref={textareaRef}
            id='keyboard-playground-input'
            className={styles.input}
            value={sample}
            rows={2}
            placeholder='Type a little here…'
            onChange={handleSampleChange}
            onCompositionStart={() => {
              composingRef.current = true;
            }}
            onCompositionEnd={handleCompositionEnd}
            onKeyDown={handleTypingKeyDown}
            onKeyUp={handleTypingKeyUp}
            onBlur={clearPressed}
          />

          <div className={styles.controls}>
            <p id='keyboard-playground-instructions' className={styles.instructions}>
              Tap keys, or use arrow keys to move across the board. Tab exits.
            </p>
            <button
              type='button'
              className={styles.soundToggle}
              aria-pressed={soundEnabled}
              onClick={() => void toggleSound()}
            >
              Sound {soundEnabled ? 'on' : 'off'}
            </button>
          </div>
          {soundUnavailable ? (
            <p className={styles.soundNote} role='status'>
              Synthetic sound is unavailable in this browser.
            </p>
          ) : null}

          <div
            className={styles.keyboardScroll}
            role='region'
            aria-label='Interactive HHKB-style keyboard; scroll horizontally on narrow screens'
          >
            <div
              className={styles.keyboard}
              role='group'
              aria-describedby='keyboard-playground-instructions'
            >
              {KEY_ROWS.map((row, rowIndex) => (
                <div className={styles.keyRow} key={rowIndex}>
                  {row.map((key, keyIndex) => (
                    <button
                      ref={(element) => {
                        if (!keyRefs.current[rowIndex]) keyRefs.current[rowIndex] = [];
                        keyRefs.current[rowIndex][keyIndex] = element;
                      }}
                      key={key.code}
                      type='button'
                      className={styles.key}
                      style={{ '--key-width': key.width ?? 1 } as CSSProperties}
                      aria-label={accessibleKeyName(key)}
                      data-pressed={
                        isDisplayedKeyPressed(key.code, pressedCodes) ? '' : undefined
                      }
                      tabIndex={rovingCode === key.code ? 0 : -1}
                      onFocus={() => setRovingCode(key.code)}
                      onKeyDown={(event) =>
                        moveRovingFocus(event, rowIndex, keyIndex)
                      }
                      onClick={() => insertFromKey(key)}
                    >
                      {key.label || <span aria-hidden='true'>&nbsp;</span>}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className={styles.scrollHint}>Scroll the keyboard sideways to see every key.</p>
          <p className={styles.privacyNote}>
            Your sample stays in this component and is cleared when the page reloads.
            Sound is a quiet synthetic click. The layout is a positional sketch, not an
            exact reproduction.
          </p>
        </div>
      ) : null}
    </div>
  );
}
