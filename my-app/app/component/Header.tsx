import * as React from "react";
//import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export const Header = () => {

    return (
        <div className="flex p-4 px-10 items-center justify-between text-text-color">
            <div className="flex items-center gap-2" >
                <Image className="rounded-lg" src={"/secure_share_logo.png"} alt={"logo secure share"} width={64} height={64}/>
                <span>
                    Secure Share
                </span>
                
            </div>
            <Stack spacing={2} direction="row">
                <Link href={"/chiffrement"}>CHIFFREMENT</Link>
                <Link href={"/FAQ"}>DECHIFFREMENT</Link>
                <Link href={"/info"}>QUI SOMMES NOUS ?</Link>
            </Stack>
            <div>
                <Button variant="contained">
                    SE CONNECTER
                </Button>
            </div>
        </div>
    );
};