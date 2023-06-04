/** outline, black , yellow */


import styled from "styled-components";


const ButtonComponent = ({ className, text, onClick=()=>{window.open('https://calendly.com/acutagramming11/30min?month=2023-06')} }) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

const ButtonStyle = styled(ButtonComponent)(({ theme, variant, color }) => ({
    '&': {
        cursor: 'pointer',
        padding: '12px 24px',
        fontSize: theme.fontSizeSmall,
        backgroundColor: variant === 'fill' ? theme[color] : 'white',
        color: color === 'black' ? theme.contrast : theme.fontBlack,
        fontWeight: '500',
        borderRadius: '4px',
        letterSpacing: '0.5px',
        border: variant === 'outline' ? `1px solid black` : `1px solid ${theme[color]}`,
    }

}));

export default ButtonStyle;


/** variant 
 *                
                    <ButtonStyle text='Schedule a Call' variant='outline' color='none' ></ButtonStyle>
                    <ButtonStyle text='Schedule a Call' variant='fill' color='yellow' ></ButtonStyle>
                    <ButtonStyle text='Schedule a Call' variant='fill' color='black' ></ButtonStyle>
        
 */