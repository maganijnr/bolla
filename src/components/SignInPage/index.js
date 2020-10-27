import React from 'react';

import { SignInContainer,FormWrap,Icon,FormContent,Form,FormH1,FormGroup,FormLabel,FormInput,FormBtnWrap,FormBtn,FormRedirect} from './SignInElements';

const SignInPage = () => {
    return (
        <>
            <SignInContainer>
                <FormWrap>
                    <Icon to="/">Bolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in your account</FormH1>
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
                        <FormRedirect to="/signup">Don't have an account ? Click here  </FormRedirect>
                    </FormContent>
                </FormWrap>
            </SignInContainer>
        </>
    )
}

export default SignInPage