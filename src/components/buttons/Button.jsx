const Button = ({ label, color }) => {
  return <button className={`btn btn-${color} btn-sm`}>{label}</button>;
};
// );

export default Button;
