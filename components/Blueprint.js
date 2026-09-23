export function Corners({ color }) {
  const s = color ? { color } : undefined;
  return (<>
    <i className="corner tl" style={s}></i><i className="corner tr" style={s}></i>
    <i className="corner bl" style={s}></i><i className="corner br" style={s}></i>
  </>);
}

export function Frame({ children, style, className = '', cornerColor, ...rest }) {
  return (
    <div className={('blueprint ' + className).trim()} style={{ position: 'relative', ...style }} {...rest}>
      <Corners color={cornerColor} />
      {children}
    </div>
  );
}

export function BpButton({ children, primary, style, ...rest }) {
  return (
    <button className={'btn blueprint' + (primary ? ' btn-primary' : '')} style={{ position: 'relative', ...style }} {...rest}>
      {children}<Corners />
    </button>
  );
}
