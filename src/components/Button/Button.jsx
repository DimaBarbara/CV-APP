import s from '../Button/Button.module.css'

export default function Button({
  type = 'button',
  text,
  handleClick,
}) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={s.button}
    >
      {text}
    </button>
  )
}