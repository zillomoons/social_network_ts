import { Suspense } from "react"
import {Preloader} from "../common/preloader/preloader";

export const WithSuspense = (Component: any) => (props: any) =>{
    return (
        <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    )
}