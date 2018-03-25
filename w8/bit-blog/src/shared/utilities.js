export const getId = (props) => {
    const path = props.location.pathname.split('/');
    return path[path.length - 1]
}