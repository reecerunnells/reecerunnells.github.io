import NavButton from './NavButton';

type Props = {}

export default function Nav({}: Props) {
  return (
      <>
        <NavButton label={"test"}></NavButton>
        <NavButton label={"another test"}></NavButton>
        <NavButton label={"test"}></NavButton>
        <NavButton label={"another test"}></NavButton>
      </>
  )
}