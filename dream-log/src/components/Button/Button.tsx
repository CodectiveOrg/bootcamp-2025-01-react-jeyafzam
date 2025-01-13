import { ComponentProps} from "react"

type Props =  ComponentProps<"button">


 const Button = ({children , ...otherProps}: Props) =>{
    return(
        <button {...otherProps}>{children}</button>
    )
}
export default Button;