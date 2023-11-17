async function waiter() {
    await new Promise(resolve => setTimeout(resolve, 800));
    updatePageHeader()
    embedWistiaVideo('sh9w3ogy2l')
}

waiter()