// router.ts
import { route } from "../../lib/state";
import { Toast } from "../components/toast";

export type RoutePage = {
  name: string;
  element: HTMLElement;
};

export function useRouter({
  container,
  pages,
  pageTitles = [],
}: {
  container: HTMLElement;
  pages: RoutePage[];
  pageTitles?: string[];
}) {
  let currentIndex = 0;

  const moveTo = (index: number, page: HTMLElement = pages[index].element, title = pageTitles[index] || pages[index].name) => {
    if (index !== currentIndex) {
      currentIndex = index;
      route.move(container, page, title);
    } else {
      Toast({ text: 'Already in window', page: container, type: 'warning' });
    }
  };

  const getCurrentIndex = () => currentIndex;

  return {
    moveTo,
    getCurrentIndex,
  };
}
