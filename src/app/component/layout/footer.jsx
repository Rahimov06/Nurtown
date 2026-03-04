"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  EmailOutlined,
  Facebook,
  Twitter,
  LinkedIn,
  Pinterest,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  // Массив барои менюи иттилоот
  const infoLinks = [
    { href: "/", key: "home" },
    { href: "/photo", key: "gallery" },
    { href: "/project", key: "projects" },
    { href: "/certification", key: "certificates" },
    { href: "/contact", key: "contacts" }
  ];

  // Массив барои контактҳо
  const contacts = [
    { icon: <LocationOnOutlined />, value: t('footer.contacts.address'), key: "address" },
    { icon: <LocalPhoneOutlined />, value: t('footer.contacts.phone'), key: "phone" },
    { icon: <EmailOutlined />, value: t('footer.contacts.email'), key: "email" }
  ];

  // Массив барои иконаҳои шабакаҳои иҷтимоӣ
  const socialIcons = [
    { icon: <Facebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <LinkedIn />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Pinterest />, url: "https://pinterest.com", label: "Pinterest" }
  ];

  return (
    <>
      <footer className="bg-[#2C2C2C] text-white z-50 w-full relative px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">

          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/Group 11 1.png"
              alt="Logo"
              width={145}
              height={94}
              className="mx-auto md:mx-0 w-[120px] sm:w-[145px]"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <strong className="text-lg">{t('footer.information.title')}</strong>
            {infoLinks.map((link) => (
              <Link key={link.key} href={link.href}>
                {t(`footer.information.links.${link.key}`)}
              </Link>
            ))}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <strong className="text-lg">{t('footer.contacts.title')}</strong>

            {/* Address */}
            <p className="flex flex-col items-center md:items-start gap-2">
              <span className="flex items-center gap-2">
                {contacts[0].icon} {contacts[0].value}
              </span>
            </p>

            {/* Phone */}
            <p className="flex items-center justify-center md:justify-start gap-2">
              {contacts[1].icon} {contacts[1].value}
            </p>

            {/* Email */}
            <p className="flex items-center justify-center md:justify-start gap-2">
              {contacts[2].icon} {contacts[2].value}
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <strong className="text-lg">{t('footer.social.title')}</strong>
            <div className="flex justify-center md:justify-start gap-4 text-white text-xl">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-gray-300 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* Copyright */}
      <p className="bg-[#2C2C2C] text-center p-4 border-t border-gray-500 text-gray-400 text-sm">
        {t('footer.copyright')}
      </p>
    </>
  );
};

export default Footer;
