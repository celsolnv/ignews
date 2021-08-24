import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    activeClassName:string;
    children:ReactElement;
}
export function ActiveLink( { children,activeClassName, ...rest }:ActiveLinkProps ){
    const { asPath } = useRouter();

    const className = asPath === rest.href ? activeClassName : '';
    return (
        <Link {...rest}>
            {cloneElement(children,{
                className
            })}
        </Link>
    )
}