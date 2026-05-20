export function Caret() {
  return (
    <span
      aria-hidden='true'
      className='inline-block w-[0.6ch] h-[1em] align-[-0.15em] ml-[0.2ch] bg-(--color-accent) motion-safe:animate-[caret-blink_1.1s_steps(2,end)_infinite]'
      style={{
        animationName: 'caret-blink',
      }}
    />
  );
}
