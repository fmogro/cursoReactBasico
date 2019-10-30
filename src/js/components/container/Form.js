import React,{Component} from 'react';
import Input from '../presentational/input'
import ReactDom from 'react-dom';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            titulo: '',
            contenido:'',
            descripcion:''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.id]: event.target.value,
        })
   }

render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form id="articulo-form" className="formulario">
                        <div className="form-group">
                            <Input
                            label="Titulo"
                            type="text"
                            id="titulo"
                            value={this.state.titulo}
                            onChange={this.onChange}
                            className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <Input
                            label="Descripcion"
                            type="text"
                            id="descripcion"
                            value={this.state.descripcion}
                            onChange={this.onChange}
                            className="form-control"
                            />
                        </div>
                        <div className="form-group">
                        <Input
                        label="Contenido"
                        type="text"
                        id="contenido"
                        value={this.state.contenido}
                        onChange={this.onChange}
                        className="form-control"
                        />
                        </div>
                    </form>
                </div>
            </div>

        </div>
        )
        
}

}
export default Form;

ReactDom.render(<Form/>,document.querySelector('#app'));