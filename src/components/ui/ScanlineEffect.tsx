export default function ScanlineEffect() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute left-0 w-full h-[2px] opacity-20"
        style={{
          background: 'linear-gradient(transparent, rgba(0,255,255,0.4), transparent)',
          animation: 'scanline 10s linear infinite',
          top: '-2px',
        }}
      />
    </div>
  )
}
