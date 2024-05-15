import { useState } from 'react'
// import Users from './Users'

const Header =( {Users} )=> {

    const [ signinData, serSigninData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event)=> {
        const {name, value} = event.target

        setSigninData(prevState => {
            return {
                ...prevState,
                [ name ]: value
            }
        })
    }

    const [ access, setAccess ] = useState(false)

    const handleSubmit =(event)=> {
        event.preventDefault()
        // console.log(users)
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === signinData.username) && (users[i].password === signinData.password)) {
                setAccess(prevState => !prevState)
            }
        }
        return access
    }

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-1 text-capitalize">login form</h1>
                        {access && <p className='access-text'>Greetings
                        { signinData.username } </p> }
                    </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} 
                    className="sign-in-form"
                    >
                        <p className="form-text text-capitalize">member? sign in</p>
                        <label className="mb-3">
                            <div className="row">
                                <div className="col-auto">
                                    <label 
                                    htmlFor="username"
                                    className="form-label">Username
                                    </label>
                                    <input 
                                    type="text"
                                    id="signinUsername"
                                    name="username"
                                    value= {signinData.username}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                                </div>
                                <div className="col-auto">
                                    <label 
                                    htmlFor="password"
                                    className="form-label">Password
                                    </label>
                                    <input 
                                    type="password"
                                    id="signinPassword"
                                    name="password"
                                    value={signinData.password}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                                </div>
                                <div className='col-auto'>
                                    <button 
                                        type='submit'
                                        className='btn btn-success'>sign in
                                    </button>
                                </div>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header