export default function Button({
  children,
  className = "",
  background = "#080E1B",
  border = "",
  type = "",
  disabled,
}) {
  const btnStyle = {
    background,
    borderRadius: "0.7rem",
    padding: " 1rem 1.5rem ",
    border,
    color: "#FFFFFF",
    cursor: "pointer",
  };

  return (
    <button
      style={btnStyle}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
