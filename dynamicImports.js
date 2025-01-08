let fetch;

const initializeLibraries = async () => {
  if (!fetch) {
    fetch = (await import('node-fetch')).default;
  }
};

const getLibraries = async () => {
  await initializeLibraries();
  return { fetch };
};

module.exports = { getLibraries };