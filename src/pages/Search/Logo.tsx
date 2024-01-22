interface Props {
  src: string;
}

function Logo(props: Props): JSX.Element {
  return <img className='logo' src={props.src} alt='logo' />;
}

export default Logo;
