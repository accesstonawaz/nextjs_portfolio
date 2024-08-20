function Tag({title}: {title: string}) {
    return (<div className="flex items-center rounded-full bg-teal-950 px-3 py-1 text-base font-extrabold leading-5 text-teal-500 ">
        {title}
    </div>);
}

export default Tag;