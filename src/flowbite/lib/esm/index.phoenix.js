// core components
import Accordion, { initAccordions } from './components/accordion';
import Carousel, { initCarousels } from './components/carousel';
import Collapse, { initCollapses } from './components/collapse';
import Dial, { initDials } from './components/dial';
import Dismiss, { initDismisses } from './components/dismiss';
import Drawer, { initDrawers } from './components/drawer';
import Dropdown, { initDropdowns } from './components/dropdown';
import Modal, { initModals } from './components/modal';
import Popover, { initPopovers } from './components/popover';
import Tabs, { initTabs } from './components/tabs';
import Tooltip, { initTooltips } from './components/tooltip';
import Events from './dom/events';
var liveViewLoadEvents = new Events('phx:page-loading-stop', [
    initAccordions,
    initCollapses,
    initCarousels,
    initDismisses,
    initDropdowns,
    initModals,
    initDrawers,
    initTabs,
    initTooltips,
    initPopovers,
    initDials,
]);
liveViewLoadEvents.init();
var regularViewLoadEvents = new Events('load', [
    initAccordions,
    initCollapses,
    initCarousels,
    initDismisses,
    initDropdowns,
    initModals,
    initDrawers,
    initTabs,
    initTooltips,
    initPopovers,
    initDials,
]);
regularViewLoadEvents.init();
export default {
    Accordion: Accordion,
    Carousel: Carousel,
    Collapse: Collapse,
    Dial: Dial,
    Drawer: Drawer,
    Dismiss: Dismiss,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    Tabs: Tabs,
    Tooltip: Tooltip,
    Events: Events,
};
//# sourceMappingURL=index.phoenix.js.map