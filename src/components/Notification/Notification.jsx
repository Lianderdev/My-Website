// Components
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

// Libs
import { motion } from "framer-motion"

export function Notification({ message, information, icon }) {
    return (
        <motion.div 
        animate={{x: -100}}
        className='w-full max-w-[350px] md:max-w-[500px] rounded-xl fixed bottom-8 -right-[80px]'>
            <Alert className='relative h-auto flex gap-4 bg-zinc-900'>
                <i className="text-2xl">{icon}</i>
                <div className="flex flex-col gap-1">
                    <AlertTitle className='md:text-lg'>{message}</AlertTitle>
                    <AlertDescription className='text-zinc-400'>
                        {information}
                    </AlertDescription>
                </div>
            </Alert>
        </motion.div>
    )
}
