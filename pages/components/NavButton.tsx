type Props = {
    label: string
}

export default function NavButton({label}: Props) {
  return (
    <button>{label}</button>
  )
}