"use client";
import {Button, Card, Checkbox, Label, TextInput} from "flowbite-react";
import { useRouter } from "next/navigation";
export default function page() {
  const router=useRouter()
  const LoginAdmin=(e)=>{
     e.preventDefault()
    router.push('/admin-pages')
  }
    return (
        <>
           <div className="flex justify-center h-screen items-center mx-auto flex-col gap-[20px]">
            <h2 className="text-[30px] font-bold">Frank and Oak</h2>
           <Card className="lg:w-[500px] w-[300px] shadow-2xl p-3">
                <form className="flex flex-col gap-10" onSubmit={LoginAdmin}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com"  />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password"  placeholder="******" />
                    </div>
                 
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
           </div>
         
        </>
    )
}
