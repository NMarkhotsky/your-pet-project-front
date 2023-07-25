import { Input, Label, Text } from "./FieldRadio.styled";

function FieldRadio({ value, text, onChange, checked }) {

  return (
    <>
      <Label htmlFor={value}>
        <Text checked={checked}>{text}</Text>
      </Label>
      <Input
        id={value}
        name="option"
        type="radio"
        onChange={onChange}
        value={value}
        checked={checked}
      />
    </>
  )
}

export default FieldRadio;
