import { library } from '@fortawesome/fontawesome-svg-core';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faSkating } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export const iconLoader = () => {
  library.add(faBicycle, faSkating, faBook, faNetworkWired, faLaptop);
};
