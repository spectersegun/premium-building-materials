export function Field({ label, children }) {
  return <div className="field"><label>{label}</label>{children}</div>;
}

export function Input(props) { return <input className="input" {...props} />; }
export function Textarea(props) { return <textarea className="input" {...props} />; }
export function Select({ options, ...rest }) {
  return <select className="input" {...rest}>{options.map(o => <option key={o}>{o}</option>)}</select>;
}
