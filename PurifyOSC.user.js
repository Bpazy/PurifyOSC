const mulanDoms = document.querySelectorAll('a[title*="木兰"]');
mulanDoms.forEach(d => d.setAttribute('style', 'filter:blur(3px); pointer-events:none;'));
