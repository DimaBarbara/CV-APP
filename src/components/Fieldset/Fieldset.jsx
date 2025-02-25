import s from '../Fieldset/Fieldset.module.css'


export default function Fieldset({ title, children }) {
  return (
    <fieldset className={s.fieldset}>
      <legend className={s.legend} >
        {title}
      </legend>
      {children}
    </fieldset>
  )
}