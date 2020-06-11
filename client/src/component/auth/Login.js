import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';


const styles = {
    textField: {
        width: '100%',
        marginBottom: 5
    },
    btnBlock: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10
    }
}

class Login extends Component {
    constructor(props) {
        super(props)

        // props (diminutif de « propriétés ») et state sont tous les deux des objets JavaScript bruts. 
        // Même s’ils contiennent tous les deux des informations qui influencent le résultat produit, ils présentent une différence 
        // majeure : props est passé au composant (à la manière des arguments d’une fonction)
        // tandis que state est géré dans le composant (comme le sont les variables déclarées à l’intérieur d’une fonction).

        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this) // pendant qu'on tape le text field , on veut changer le "state" ou est store le component.
        this.handleButton = this.handleButton.bind(this) // pour que le button fonctionne avec le form
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleButton(e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(userData)
    }


    render() {
        const { classes } = this.props;
        const { errors } = this.state;
        return (
            <Paper style={{ padding: 8 }}>
                <form onSubmit={this.handleButton}>
                    <TextField
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
                        label="Email"
                        placeholder="Email"
                        className={classes.textField}
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true : false}

                    />

                    <TextField
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="Password"
                        type="password"
                        className={classes.textField}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true : false}

                    />

                    <div className={classes.btnBlock}>
                        <Button variant="outlined" type="submit"  >Login !</Button>
                    </div>
                </form>
            </Paper>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(Login)))