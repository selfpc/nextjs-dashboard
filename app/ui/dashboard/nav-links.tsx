'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ArrowDownLeftIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronDownIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/20/solid';

// Assuming 'links' is defined somewhere in your code
const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Users',
    href: '/dashboard/users',
    icon: UserGroupIcon,
  },
 
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Downloads',
    href: '/downloads',
    icon:ArrowDownLeftIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-grey-100 text-grey-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
