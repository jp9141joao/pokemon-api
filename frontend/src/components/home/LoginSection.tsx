import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import SignInForm from "./login/signInForm";
import SignUpForm from "./login/signUpForm";
import ForgotPasswordForm from "./login/forgotPasswordForm";

export default function LoginSection({ showDialog, setShowDialog }: { showDialog: boolean, setShowDialog: (value: boolean) => void }) {

    const [ formType, setFormType ] = useState<'SignIn' | 'SignUp' | 'ForgotPassword'>('SignIn');
    const [ fullName, setFullName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>(''); 

    return (
        <Dialog
            open={showDialog}
            onOpenChange={(open) => {
                
                if (!open) {
                    setShowDialog(false);
                    setFormType("SignIn")
                }
            }}
        >
            <DialogContent  
                onOpenAutoFocus={(e) => e.preventDefault()}  
                className="sm:max-w-[425px]"
            >
                <DialogHeader>
                    <DialogTitle className="text-3xl xxs:text-4xl">
                        { 
                            formType == "SignIn" ? " Sign In" : 
                            formType == "SignUp" ? "Sign Up" :
                            "Reset Password" 
                        }
                    </DialogTitle>
                </DialogHeader>
                {
                    formType == "SignIn" ? 
                        <SignInForm 
                            setFormType={setFormType}
                            setFullName={setFullName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        /> :
                    formType == "SignUp" ?
                        <SignUpForm 
                            setFormType={setFormType}
                            fullName={fullName}
                            setFullName={setFullName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        /> :
                        <ForgotPasswordForm 
                        />
                } 
            </DialogContent>
        </Dialog>
    )
}