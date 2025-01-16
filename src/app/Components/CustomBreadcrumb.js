import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

export default function CustomBreadcrumb({ prevpage, currenPage }) {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className="mb-4">
                <Link color="inherit" href="/admin-pages" className='hover:underline' > Home </Link>
                {
                    prevpage
                    &&
                    <span>{prevpage} </span>

                }
                <Typography color="textPrimary" className='text-[20px]'>{currenPage}</Typography>
            </Breadcrumbs>
        </>
    )
}
