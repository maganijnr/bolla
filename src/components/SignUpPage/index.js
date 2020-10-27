import React from 'react';

import { SignInContainer,FormWrap,Icon,FormContent,Form,FormH1,FormGroup,FormLabel,FormInput,FormBtnWrap,FormBtn,FormRedirect} from '../SignInPage/SignInElements';

const SignUpPage = () => {
    return (
        <>
            <SignInContainer>
                <FormWrap>
                    <Icon to="/">Dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create an account</FormH1>
                            <FormGroup>
                                <FormLabel htmlFor="for">Full Name</FormLabel>
                                <FormInput type="name" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="for">Username</FormLabel>
                                <FormInput type="username" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInput type="email" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="for">Password</FormLabel>
                                <FormInput type="password" />
                            </FormGroup>
                            <FormBtnWrap>
                                <FormBtn>Sign In</FormBtn>
                            </FormBtnWrap>
                        </Form>
                        <FormRedirect to="/signin">Already have an account ? Click here  </FormRedirect>
                    </FormContent>
                </FormWrap>
            </SignInContainer>
        </>
    )
}

export default SignUpPage