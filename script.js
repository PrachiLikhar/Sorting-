document.getElementById('theme').addEventListener('change', (event) => {
    document.body.className = event.target.value;
});

document.getElementById('startButton').addEventListener('click', () => {
    document.querySelector('.sort-container').style.display = 'flex';
    generateBars();
});

document.getElementById('generateButton').addEventListener('click', generateBars);

document.getElementById('sortButton').addEventListener('click', async () => {
    const algorithm = document.getElementById('algorithm').value;
    displayAlgorithmInfo(algorithm);
    switch (algorithm) {
        case 'bubbleSort':
            await bubbleSort();
            break;
        case 'selectionSort':
            await selectionSort();
            break;
        case 'insertionSort':
            await insertionSort();
            break;
        case 'mergeSort':
            await mergeSort();
            break;
        case 'quickSort':
            await quickSort();
            break;
    }
});

document.getElementById('algorithm').addEventListener('change', () => {
    const algorithm = document.getElementById('algorithm').value;
    displayAlgorithmInfo(algorithm);
});

function generateBars() {
    const barContainer = document.getElementById('barContainer');
    const arraySize = document.getElementById('arraySize').value;
    barContainer.innerHTML = '';
    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        const height = Math.floor(Math.random() * 300) + 10;
        bar.style.height = `${height}px`;
        bar.textContent = height;
        barContainer.appendChild(bar);
    }
}

function displayAlgorithmInfo(algorithm) {
    const algorithmInfo = document.getElementById('algorithmInfo');
    let info = '';
    switch (algorithm) {
        case 'bubbleSort':
            info = `
                <h3>Bubble Sort</h3>
                <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.</p>
                <p><strong>Time Complexity:</strong></p>
                <ul>
                    <li>Worst Case: O(n<sup>2</sup>)</li>
                    <li>Average Case: O(n<sup>2</sup>)</li>
                    <li>Best Case: O(n)</li>
                </ul>
                <pre><code>
                function bubbleSort(arr) {
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < arr.length - i - 1; j++) {
                            if (arr[j] > arr[j + 1]) {
                                // swap arr[j] and arr[j + 1]
                                let temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;
                            }
                        }
                    }
                    return arr;
                }
                </code></pre>
            `;
            break;
        case 'selectionSort':
            info = `
                <h3>Selection Sort</h3>
                <p>Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.</p>
                <p><strong>Time Complexity:</strong></p>
                <ul>
                    <li>Worst Case: O(n<sup>2</sup>)</li>
                    <li>Average Case: O(n<sup>2</sup>)</li>
                    <li>Best Case: O(n<sup>2</sup>)</li>
                </ul>
                <pre><code>
                function selectionSort(arr) {
                    for (let i = 0; i < arr.length; i++) {
                        let minIdx = i;
                        for (let j = i + 1; j < arr.length; j++) {
                            if (arr[j] < arr[minIdx]) {
                                minIdx = j;
                            }
                        }
                        // swap arr[i] and arr[minIdx]
                        let temp = arr[i];
                        arr[i] = arr[minIdx];
                        arr[minIdx] = temp;
                    }
                    return arr;
                }
                </code></pre>
            `;
            break;
        case 'insertionSort':
            info = `
                <h3>Insertion Sort</h3>
                <p>Insertion sort is a simple sorting algorithm that works by building a sorted array one element at a time. It is considered an “in-place” sorting algorithm, meaning it doesn’t require any additional memory space beyond the original array.</p>
                <p><strong>Time Complexity:</strong></p>
                <ul>
                    <li>Worst Case: O(n<sup>2</sup>)</li>
                    <li>Average Case: O(n<sup>2</sup>)</li>
                    <li>Best Case: O(n)</li>
                </ul>
                <pre><code>
                function insertionSort(arr) {
                    for (let i = 1; i < arr.length; i++) {
                        let key = arr[i];
                        let j = i - 1;
                        while (j >= 0 && arr[j] > key) {
                            arr[j + 1] = arr[j];
                            j = j - 1;
                        }
                        arr[j + 1] = key;
                    }
                    return arr;
                }
                </code></pre>
            `;
            break;
        case 'mergeSort':
            info = `
                <h3>Merge Sort</h3>
                <p>Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.</p>
                <p><strong>Time Complexity:</strong></p>
                <ul>
                    <li>Worst Case: O(n log n)</li>
                    <li>Average Case: O(n log n)</li>
                    <li>Best Case: O(n log n)</li>
                </ul>
                <pre><code>
                async function mergeSort(array) {
                    if (array.length < 2) return array;
                    const mid = Math.floor(array.length / 2);
                    const left = array.slice(0, mid);
                    const right = array.slice(mid);

                    return await merge(await mergeSort(left), await mergeSort(right));
                }

                async function merge(left, right) {
                    let result = [];
                    let leftIndex = 0;
                    let rightIndex = 0;

                    while (leftIndex < left.length && rightIndex < right.length) {
                        if (left[leftIndex] < right[rightIndex]) {
                            result.push(left[leftIndex]);
                            leftIndex++;
                        } else {
                            result.push(right[rightIndex]);
                            rightIndex++;
                        }
                    }

                    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
                }
                </code></pre>
            `;
            break;
        case 'quickSort':
            info = `
                <h3>Quick Sort</h3>
                <p>QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.</p>
                <p><strong>Time Complexity:</strong></p>
                <ul>
                    <li>Worst Case: O(n<sup>2</sup>)</li>
                    <li>Average Case: O(n log n)</li>
                    <li>Best Case: O(n log n)</li>
                </ul>
                <pre><code>
                async function quickSort(array, left = 0, right = array.length - 1) {
                    if (left >= right) return;

                    const pivotIndex = await partition(array, left, right);
                    await quickSort(array, left, pivotIndex - 1);
                    await quickSort(array, pivotIndex + 1, right);
                }

                async function partition(array, left, right) {
                    const pivotValue = array[right];
                    let pivotIndex = left;

                    for (let i = left; i < right; i++) {
                        if (array[i] < pivotValue) {
                            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
                            pivotIndex++;
                        }
                    }

                    [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];
                    return pivotIndex;
                }
                </code></pre>
            `;
            break;
    }
    algorithmInfo.innerHTML = info;
}

async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';
            playSound(bars[j].offsetHeight * 2, 100);
            await sleep(300); 

            if (bars[j].offsetHeight > bars[j + 1].offsetHeight) {
                await swap(bars[j], bars[j + 1]);
            }
            bars[j].style.backgroundColor = `var(--bar-bg)`;
            bars[j + 1].style.backgroundColor = `var(--bar-bg)`;
        }
        bars[bars.length - i - 1].style.backgroundColor = 'green';
    }
}

async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
        let minIdx = i;
        bars[i].style.backgroundColor = 'red';
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = 'yellow';
            playSound(bars[j].offsetHeight * 2, 100);
            await sleep(300); 
        
            if (bars[j].offsetHeight < bars[minIdx].offsetHeight) {
                if (minIdx !== i) {
                    bars[minIdx].style.backgroundColor = `var(--bar-bg)`;
                }
                minIdx = j;
                bars[minIdx].style.backgroundColor = 'red';
            } else {
                bars[j].style.backgroundColor = `var(--bar-bg)`;
            }
        }
        await swap(bars[i], bars[minIdx]);
        bars[minIdx].style.backgroundColor = `var(--bar-bg)`;
        bars[i].style.backgroundColor = 'green';
    }
}

async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 1; i < bars.length; i++) {
        let key = bars[i].offsetHeight;
        bars[i].style.backgroundColor = 'red';
        let j = i - 1;
        while (j >= 0 && bars[j].offsetHeight > key) {
            bars[j + 1].style.height = `${bars[j].offsetHeight}px`;
            bars[j + 1].textContent = bars[j].offsetHeight;
            bars[j + 1].style.backgroundColor = 'yellow';
            playSound(bars[j].offsetHeight * 2, 100);
            j = j - 1;
            await sleep(300); 
        }
       
        bars[j + 1].style.height = `${key}px`;
        bars[j + 1].textContent = key;
        bars[i].style.backgroundColor = `var(--bar-bg)`;
        bars[j + 1].style.backgroundColor = 'green';
    }
}

async function mergeSort() {
    const bars = document.querySelectorAll('.bar');
    const array = Array.from(bars).map(bar => bar.offsetHeight);
    const sortedArray = await mergeSortHelper(array, 0, array.length - 1, bars);
    for (let i = 0; i < sortedArray.length; i++) {
        bars[i].style.height = `${sortedArray[i]}px`;
        bars[i].textContent = sortedArray[i];
        bars[i].style.backgroundColor = 'green';
        await sleep(50);
    }
}

async function mergeSortHelper(array, left, right, bars) {
    if (left >= right) return [array[left]];

    const mid = Math.floor((left + right) / 2);
    const leftArray = await mergeSortHelper(array, left, mid, bars);
    const rightArray = await mergeSortHelper(array, mid + 1, right, bars);
    return await merge(leftArray, rightArray, left, bars);
}

async function merge(left, right, startIdx, bars) {
    let result = [], leftIndex = 0, rightIndex = 0, resultIndex = startIdx;

    while (leftIndex < left.length && rightIndex < right.length) {
        bars[resultIndex].style.backgroundColor = 'purple'; // Active merge
        await sleep(200);
        playSound(Math.min(left[leftIndex], right[rightIndex]) * 2, 100);
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            bars[resultIndex].style.height = `${left[leftIndex]}px`;
            bars[resultIndex].textContent = left[leftIndex];
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            bars[resultIndex].style.height = `${right[rightIndex]}px`;
            bars[resultIndex].textContent = right[rightIndex];
            rightIndex++;
        }
        bars[resultIndex].style.backgroundColor = 'orange'; // Partially sorted
        resultIndex++;
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        bars[resultIndex].style.height = `${left[leftIndex]}px`;
        bars[resultIndex].textContent = left[leftIndex];
        bars[resultIndex].style.backgroundColor = 'orange';
        playSound(left[leftIndex] * 2, 100);
        leftIndex++;
        resultIndex++;
        await sleep(200);
    }
   
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        bars[resultIndex].style.height = `${right[rightIndex]}px`;
        bars[resultIndex].textContent = right[rightIndex];
        bars[resultIndex].style.backgroundColor = 'orange';
        playSound(right[rightIndex] * 2, 100);
        rightIndex++;
        resultIndex++;
        await sleep(200);
    }

    for (let i = startIdx; i < resultIndex; i++) {
        bars[i].style.backgroundColor = 'green'; // Final sorted position
    }

    return result;
}


async function quickSort() {
    const bars = document.querySelectorAll('.bar');
    const array = Array.from(bars).map(bar => bar.offsetHeight);
    await quickSortHelper(array, 0, array.length - 1, bars);
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = `${array[i]}px`;
        bars[i].textContent = array[i];
        bars[i].style.backgroundColor = 'green';
        await sleep(100);
    }
}

async function quickSortHelper(array, left, right, bars) {
    if (left >= right) return;

    const pivotIndex = await partition(array, left, right, bars);
    await quickSortHelper(array, left, pivotIndex - 1, bars);
    await quickSortHelper(array, pivotIndex + 1, right, bars);
}

async function partition(array, left, right, bars) {
    const pivotValue = array[right];
    let pivotIndex = left;

    bars[right].style.backgroundColor = 'purple'; // Highlight pivot
    for (let i = left; i < right; i++) {
        bars[i].style.backgroundColor = 'yellow';
        await sleep(300);
        playSound(bars[i].offsetHeight * 2, 100);
        if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            await swap(bars[i], bars[pivotIndex]);
            bars[pivotIndex].style.backgroundColor = 'orange'; // Mark partition
            pivotIndex++;
        }
        bars[i].style.backgroundColor = `var(--bar-bg)`;
    }
    [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];
    await swap(bars[pivotIndex], bars[right]);
    bars[pivotIndex].style.backgroundColor = 'green'; // Sorted element
    return pivotIndex;
}

async function swap(bar1, bar2) {
    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar1.textContent = bar2.style.height.slice(0, -2);
    bar2.style.height = tempHeight;
    bar2.textContent = tempHeight.slice(0, -2);
    await sleep(300);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playSound(frequency, duration) {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
        context.close();
    }, duration);
}
