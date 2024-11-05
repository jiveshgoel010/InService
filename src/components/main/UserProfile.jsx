/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Gem } from "lucide-react"
import { LogOutIcon } from "lucide-react"
import { User } from "lucide-react"

const UserProfile = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="border-none"><User /></button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-2xl">My Profile</SheetTitle>
                </SheetHeader>
                <div className="my-4 flex flex-col gap-4 flex-1 border border-black">
                    <div className="self-center">
                        <img src="/profile.png" alt="" className="w-[100px]" />
                    </div>
                    <div className="">
                        <p>Jivesh Goel</p>
                    </div>
                </div>
                <hr />
                <SheetFooter>
                    {/* <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose> */}
                    <div className="flex gap-4">
                        <Button className=""><LogOutIcon /> Logout</Button>
                        <Button className=""><Gem />Become A Seller</Button>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default UserProfile