import './form-input.styles.scss';
const FormInput = ({lable, ...otherProps}) => {
    return(
    <div className="group">
        {lable && (   //if lable exists then render this lable
        <label className={` ${otherProps.value.length ? 'shrink' : ''} form-input-label `}>{lable}</label>
        )}

        <input className="form-input" {...otherProps}/>
    </div>
    );
};

export default FormInput;