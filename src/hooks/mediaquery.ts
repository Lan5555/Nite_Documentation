interface Props {
    output: (mediaList: string) => void;
}

export const MediaQuery = ({ output }: Props) => {
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');

    function checkMedia(): void {
        if (desktop.matches) {
            output('desktop');
        } else if (tablet.matches) {
            output('tablet');
        } else if (mobile.matches) {
            output('mobile');
        }
    }

    // ✅ Run check immediately on function call (fixes issue)
    checkMedia();

    // ✅ Attach resize listener
    window.addEventListener('resize', checkMedia);
};
