import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { registerUser } from '../../actions/authActions'

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

class Register extends Component {
    constructor(props) {
        super(props)

        // props (diminutif de « propriétés ») et state sont tous les deux des objets JavaScript bruts. 
        // Même s’ils contiennent tous les deux des informations qui influencent le résultat produit, ils présentent une différence 
        // majeure : props est passé au composant (à la manière des arguments d’une fonction)
        // tandis que state est géré dans le composant (comme le sont les variables déclarées à l’intérieur d’une fonction).

        this.state = {
            email: '',
            login: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this) // pendant qu'on tape le text field , on veut changer le "state" ou est store le component.
        this.handleButton = this.handleButton.bind(this) // pour que le button fonctionne avec le form
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors)
            this.setState({ errors: nextProps.errors })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleButton(e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            login: this.state.login,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(userData)
        this.props.registerUser(userData, this.props.history)
    }


    render() {
        const { classes } = this.props;
        const { errors } = this.state
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
                    />
                    <TextField
                        name='login'
                        value={this.state.login}
                        onChange={this.handleChange}
                        label="Login"
                        type="text"
                        placeholder="Login"
                        className={classes.textField}
                        helperText={errors.login ? errors.login : ''}
                        error={errors.login ? true : false}
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
                    <TextField
                        name='password2'
                        value={this.state.password2}
                        onChange={this.handleChange}
                        label="Confirm password"
                        type="password"
                        className={classes.textField}
                        helperText={errors.password2 ? errors.password2 : ''}
                        error={errors.password2 ? true : false}

                    />
                    <div className={classes.btnBlock}>
                        <Button variant="outlined" type="submit"  >Register !</Button>
                    </div>
                </form>
            </Paper>
        )
    }
}
const mapStateToProps = (state) => ({
    errors: state.errors
})
export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)))