/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

export const UndoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
  </svg>
);

export const RedoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
  </svg>
);

export const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const MagicWandIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 .879 16.5a3 3 0 0 1 4.242-4.242 3 3 0 0 0 4.242 0 3 3 0 0 0 0-4.242 3 3 0 0 1-4.242-4.242 3 3 0 0 1 4.242 0 3 3 0 0 1 0 4.242 3 3 0 0 0 4.242 4.242 3 3 0 0 0 5.78-1.128 2.25 2.25 0 0 1 2.475-2.118 2.25 2.25 0 0 1 .879 3.5a3 3 0 0 1-4.242 4.242 3 3 0 0 0-4.242 0 3 3 0 0 0 0 4.242Z" />
    </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.11a12.001 12.001 0 0 1 5.052 0c.55.103 1.02.568 1.11 1.11a12.001 12.001 0 0 1 0 5.052c-.103.55-.568 1.02-1.11 1.11a12.001 12.001 0 0 1-5.052 0c-.55-.103-1.02-.568-1.11-1.11a12.001 12.001 0 0 1 0-5.052M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
);

export const BullseyeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);

export const TagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
);

export const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);

export const CropIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5m13.5-1.5H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9.75v1.5A2.25 2.25 0 0 1 18 20.25h-1.5m-9.75 0H6A2.25 2.25 0 0 1 3.75 18v-1.5" />
    </svg>
);

export const PhotoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

export const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624l-.219.874-.219-.874a1.5 1.5 0 00-1.023-1.023l-.874-.219.874-.219a1.5 1.5 0 001.023-1.023l.219-.874.219.874a1.5 1.5 0 001.023 1.023l.874.219-.874.219a1.5 1.5 0 00-1.023 1.023z" />
  </svg>
);

export const MoneyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 11 12 11H9.75a2.25 2.25 0 0 0-2.25 2.25v1.318c0 .597.237 1.17.659 1.591l.879.659Z" />
    </svg>
);

export const ClipboardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v3.045M15.666 3.888c.338.397.625.854.854 1.35M6.334 3.888a2.25 2.25 0 0 1 2.166-1.638h3c1.03 0 1.9.693 2.166 1.638m-7.332 0c-.055.194-.084.4-.084.612v3.045m-3.11.252A2.25 2.25 0 0 0 2.25 9.75v9A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-3.11m-7.778 0h7.778c.347 0 .686.056 1.01.162M5.25 9.75c.324-.106.663-.162 1.01-.162h7.778" />
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

export const SaveIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5a2.25 2.25 0 0 1-2.25 2.25H1.5A2.25 2.25 0 0 1-0.75 16.5V3.75m17.25 0-3-3m0 0-3 3m3-3v11.25M3 16.5h12M4.5 3.75h.008v.008H4.5V3.75Zm2.25 0h.008v.008H6.75V3.75Z" />
        <path d="M19.5 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 18v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const GalleryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

export const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.017 1.624c-5.415 0-9.82 4.405-9.82 9.82 0 4.163 2.565 7.749 6.215 9.156-.084-.337-.155-1.07.038-1.552.203-.515.932-3.95 1.291-5.511.331-.149.738-1.173.738-2.48 0-2.331-1.65-4.072-3.732-4.072-2.827 0-4.634 2.112-4.634 4.965 0 1.83.993 3.812 2.454 3.812.981 0 1.442-.992 1.254-2.183-.223-1.424-.658-2.873-.658-3.84 0-1.011.765-1.85 1.956-1.85 1.554 0 2.748 1.644 2.748 3.55 0 2.131-1.01 4.413-2.545 4.413-1.229 0-2.152-1.053-1.855-2.274.305-1.255.845-2.58 1.15-3.491.171-.51.298-.985.454-1.461.325.681.588 1.455.588 2.31 0 3.015-2.263 5.46-5.46 5.46-3.568 0-6.218-2.973-6.218-6.735 0-3.14 2.053-5.795 5.02-5.795 2.614 0 4.156 1.91 4.156 4.122 0 2.75-1.232 5.09-3.09 5.09-1.011 0-1.83-.807-1.83-1.812 0-1.44.83-2.793 1.229-3.647.165-.352.285-.666.391-.971.292.17.622.292.971.292 2.94 0 4.83-2.923 4.83-6.103 0-2.614-2.142-4.82-5.011-4.82z" />
    </svg>
);

export const PoshmarkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M14.998 11.24H12v6.26h-2.49v-6.26H7.5v-2.49h9.99c.983 0 1.56-.84 1.25-1.75-.4-1.16-1.5-2-2.74-2-1.6 0-2.5.95-2.5.95V3.5s1.46-1.5 4-1.5c3.25 0 5.5 2.25 5.5 5.5s-2.01 5.74-4.99 5.74zM12 21.5c-5.25 0-9.5-4.25-9.5-9.5s4.25-9.5 9.5-9.5 9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5z"/>
    </svg>
);

export const EbayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 26" className={className} fill="none">
        <path fill="#E63138" d="M2.51 13.19c0-3.35 2.25-5.63 5.46-5.63 3.09 0 4.88 1.93 4.88 4.79 0 2.25-.97 3.53-2.51 4.23l2.84 5.38h-3.41l-2.6-5.11h-1.39v5.11H2.51v-13.6zm3.32 0c0 1.25.62 2.05 1.55 2.05.93 0 1.55-.8 1.55-2.05 0-1.25-.62-2.05-1.55-2.05-.93 0-1.55.8-1.55 2.05z"></path>
        <path fill="#0064D3" d="M25.6 7.56c-3.2 0-5.58 2.28-5.58 5.63s2.37 5.63 5.58 5.63c1.77 0 3.09-.59 3.99-1.58l-1.44-1.31c-.53.59-1.28.94-2.14.94-1.61 0-2.84-1.08-3.12-2.6h7.52c.03-.21.06-.45.06-.68 0-3.03-2.11-5.63-4.93-5.63zm-2.87 4.58c.28-1.5 1.41-2.49 2.87-2.49 1.47 0 2.57.99 2.84 2.49H22.73z"></path>
        <path fill="#F5AF02" d="M47.79 7.56c-3.2 0-5.58 2.28-5.58 5.63s2.37 5.63 5.58 5.63c1.77 0 3.09-.59 3.99-1.58l-1.44-1.31c-.53.59-1.28.94-2.14.94-1.61 0-2.84-1.08-3.12-2.6h7.52c.03-.21.06-.45.06-.68 0-3.03-2.11-5.63-4.93-5.63zm-2.87 4.58c.28-1.5 1.41-2.49 2.87-2.49 1.47 0 2.57.99 2.84 2.49h-5.71z"></path>
        <path fill="#86B818" d="M72.39 7.42h-3.23v11.26h3.23V7.42zM70.78 4a2.11 2.11 0 100 4.22 2.11 2.11 0 000-4.22zM80.05 18.68V7.42h-2.9v10.32l-5.6-10.32h-3.32v11.26h2.9V8.36l5.72 10.32h3.2z"></path>
        <path fill="#E63138" d="M37.98 18.68V.32h-3.23v18.36z"></path>
        <path fill="#0064D3" d="M57.92 18.68l-3.2-4.14h-1.52v4.14h-3.23V.32h5.58c3.41 0 5.86 1.96 5.86 5.11 0 2.14-.94 3.61-2.51 4.52l3.58 8.73h-3.56zm-4.72-6.2c.03-2.22-.06-2.43 2.17-2.43h.42c1.25 0 2 .53 2 1.87 0 1.34-.75 1.93-2 1.93h-.59c-1.31 0-2.03-.27-2-1.37z"></path>
    </svg>
);

export const RotateCwIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.95 11.85a8.25 8.25 0 1 0-15.9 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 12-3.375-3.375M17.625 12H21" />
    </svg>
);