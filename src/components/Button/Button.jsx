export default function Button({
  type = 'button',
  text,
  handleClick,
}) {
  return (
    <button
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}