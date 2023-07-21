function FieldInput({ text, id, value, name, onChange }) {
  return (
    <>
      <label htmlFor={value}>
        <span>{text}</span>
         <input
            name={name}
            type="text"
            id={id}
            value={value}
            onChange={onChange}
          />
      </label>
    </>
  )
}

export default FieldInput;