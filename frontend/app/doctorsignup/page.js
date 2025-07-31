import DoctorSignUp from "@/Components/DoctorSignup";
import SignUp from "@/Components/Signup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
export default function SignUpPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Link href="/">
          <h1>
            <ArrowBackIcon />Go Back
          </h1>
        </Link>
        <DoctorSignUp/>
      </div>
    </div>
  );
}
