const useDownloadTemplate = () => {
  const downloadFromAnchorHandler = (resource_link) => {
    const link = document.createElement('a');
    link.href = resource_link;

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };
  return {
    downloadFromAnchorHandler
  };
};

export default useDownloadTemplate;
