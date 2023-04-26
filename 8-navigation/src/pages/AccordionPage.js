import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'qsdsd',
            label: 'Can I use React on a project',
            content: 'You Can use React on any project you want.You Can use React on any project you want.You Can use React on any project you want.You Can use React on any project you want.'
        },
        {
            id: 'dfdd',
            label: 'Can I use Javascript on a project',
            content: 'You Can use Javascript on any project you want. You Can use Javascript on any project you want.You Can use Javascript on any project you want. You Can use Javascript on any project you want.'
        },
        {
            id: 'qhfgs',
            label: 'Can I use CSS on a project',
            content: 'You Can use CSS on any project you want. You Can use CSS on any project you want. You Can use CSS on any project you want. You Can use CSS on any project you want.'
        },

    ];
    return <Accordion items={items} />;
}

export default AccordionPage;