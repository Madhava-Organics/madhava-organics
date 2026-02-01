import { DEFAULT_SITE_CONTENT, STORAGE_KEYS, STORAGE_EVENTS } from '@/config';

export const initialSiteContent = DEFAULT_SITE_CONTENT;

export const getSiteContent = () => {
  const stored = localStorage.getItem(STORAGE_KEYS.siteContent);
  if (stored) return JSON.parse(stored);
  return initialSiteContent;
};

export const saveSiteContent = (content) => {
  localStorage.setItem(STORAGE_KEYS.siteContent, JSON.stringify(content));
  window.dispatchEvent(new Event(STORAGE_EVENTS.content));
};
