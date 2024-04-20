const SystemIcon = ({ name }) => {
	const classNames = `gi-${name}`;

	return <i className={classNames}></i>;
};

export default SystemIcon;
