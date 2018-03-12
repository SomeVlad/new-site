import Head from 'next/head'
import Link from 'next/link'
import Post from '../layouts/post'
import { H1, H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import { Image } from '../components/post/figure'
import UL, { LI } from '../components/post/list'
import Code, { Codeblock } from '../components/post/code'
import HR from '../components/post/hr'

// import P from '../../components/post/paragraph'
// import { H2, H3 } from '../../components/post/heading'
// import UL, { LI } from '../../components/post/bullets-list'
// import { Ref, FootNotes, Note } from '../../components/post/footnotes'
// import Figure, { Image, Video } from '../../components/post/figure'
// import Quote from '../../components/post/quote'
// import Link from 'next/link'
// import YouTube from '../../components/post/youtube'
// import Meta from '../../components/post/meta'

// export default () => (
export default class extends React.Component {
    assignDeep = (target, ...sources) => {
        // check if nothing left to merge the target with
        if (!sources.length) return target

        // take first source from sources...
        const source = sources.shift()

        // ...and for each of its keys...
        Object.keys(source).map(key => {
            // ...if this key is an object...
            if (isObject(source[key])) {
                // ...put this key if there is no such key in the target object
                // and merge these two objects deeply
                if (!target[key]) Object.assign(target, { [key]: {} })
                this.assignDeep(target[key], source[key])
                // if this key is not an object
            } else {
                // just merge them the simple way
                Object.assign(target, { [key]: source[key] })
            }
        })

        // then repeat procedure with all the remaining sources
        return this.assignDeep(target, ...sources)

        function isObject(item) {
            return (item && typeof item === 'object')
        }
    }

    render() {
        return (
            <Post>
                <Head>
                    <title>Several typical js tasks – pt. I</title>
                </Head>

                <H1>Several typical js tasks – pt. I</H1>

                <P>Wandering around the internet I’ve stumbled upon another <a
                    href="https://performancejs.com/post/hde6d32/The-Best-List-of-Frontend-JavaScript-Interview-Questions-(written-by-a-Frontend-Engineer)"
                    target="_blank" rel="noopener noreferrer">“list of things each frontender should know”</a>. At first
                    I wanted to write a topic with my opinion on such lists, but then I decided not to do that, and just
                    complete the coding tasks instead. Most of them I’ve already seen while passing interviews, and I
                    thought it would be handy to have it all done at once so I have my code samples on hand.</P>

                <P>Let’s go.</P>

                <H2>Implement the following functions:</H2>

                {/* TODO OL */}
                <UL>
                    <LI>
                        <P><Code>isPrime</Code> - returns <Code>true</Code> or <Code>false</Code>, indicating whether
                            the given number is prime.</P>

                        <Codeblock>{`function isPrime(num) {
     if (!Number.isInteger(num) || num < 1) return new Error('Not a positive integer')
     if (num > Number.MAX_SAFE_INTEGER) return new Error('Too big value')

     // all primes are of the form 6k ± 1, with the exception of 2 and 3
     // so we only need to test if n is divisible by 2 or 3
     // then to check through all the numbers of form 6k ± 1 < √n
     if (num < 3) return num === 2
     if (num % 2 === 0 || num % 3 === 0) return false

     for (let i = 5; i * i < num; i += 6) {
         if (num % i === 0) return false
     }
     return true
 }`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>factorial</Code> - returns a number that is the factorial of the given number.</P>

                        <Codeblock>{`function (num) {
     if (!Number.isInteger(num) || num < 1) return new Error('Not a positive integer')
     return (num !== 1) ? num * this.factorial(num - 1) : 1
 }`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>fib</Code> - returns the nth Fibonacci number.</P>

                        <Codeblock>
                            {`// with a simple memoization
function (num) {
    if (!Number.isInteger(num) || num < 1) return new Error('Not a positive integer')
    if (!this.cache) this.cache = {}
    if (!this.cache[num]) this.cache[num] = num < 3 ? 1 : this.fib(num - 1) + this.fib(num - 2)
    return this.cache[num]
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>isSorted</Code> - returns <Code>true</Code> or <Code>false</Code>, indicating whether
                            the given array of numbers is sorted.</P>

                        <Codeblock>
                            {`function (array) {
    if (!Array.isArray(array)) return new Error('Not an array')
    const length = array.length
    if (length > 1) {
        // "sorted" means ascending order, I guess
        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) return false
        }
    }
    return true
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>filter</Code> - implement the <Code>filter</Code> function.</P>

                        <Codeblock>
                            {`function (array, callback) {
    if (!Array.isArray(array)) return new Error('Not an array')
    const newArray = []
    for (let i of array) {
        if (callback(i)) newArray.push(i)
    }
    return newArray
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>reduce</Code> - implement the <Code>reduce</Code> function.</P>

                        <Codeblock>
                            {`function (array, callback, accumulator = 0) {
    if (!Array.isArray(array)) return new Error('Not an array')
    if (array.length === 0) return accumulator

    // if there is anything to reduce, pass the reduce function an array without first element,
    // a callback, and new accumulator which is the result of a callback function with
    // initial accumulator and a first element of an array
    else return this.reduce(array.slice(1), callback, callback(accumulator, array[0]))
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>reverse</Code> - reverses the given string (yes, using the built
                            in <Code>reverse</Code> function is cheating).</P>

                        <Codeblock>
                            {`function (str) {
    if (typeof str !== 'string' || str.length === 0) return new Error('Bad input')
    return Array.from(str).reduce((prev, curr) => curr + prev)
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>indexOf</Code> - implement the <Code>indexOf</Code> function for arrays.</P>

                        <Codeblock>
                            {`function (str) {
    if (!Array.isArray(array)) return new Error('Not an array')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToFind) return i
    }
    return -1
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>isPalindrome</Code> - return <Code>true</Code> or <Code>false</Code> indicating whether
                            the given string is a palindrome (case and space insensitive).</P>

                        <Codeblock>
                            {`function (str) {
    if (typeof str !== 'string') return new Error('Bad input')
    const formattedString = str.toLowerCase().replace(/\\s/g, '')
    return formattedString === Array.from(formattedString).reverse().join('')
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>missing</Code> - takes an unsorted array of unique numbers (ie. no repeats) from 1
                            through some number n, and returns the missing number in the sequence (there are either no
                            missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a
                            clever formula you can use.</P>

                        <Codeblock>
                            {`function (array) {
        const sum1toN = n => n * (n + 1) / 2
        const arraySum = array.reduce((prev, curr) => prev + curr)
        return sum1toN(array.length) === arraySum ? false : sum1toN(array.length + 1) - arraySum
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>isBalanced</Code> - takes a string and
                            returns <Code>true</Code> or <Code>false</Code> indicating whether its curly braces are
                            balanced.</P>

                        <P>I will take it one step further: for {}, [] and ().</P>

                        <Codeblock>
                            {`function (str) {
    if (typeof str !== 'string') return new Error('Bad input')
    str = str.replace(/[^(){}\\[\\]]+/g, '')
    const conformity = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    if (str.length === 0) return true
    if (str.length % 2 !== 0) return false
    const stack = []

    for (let i = 0; i < str.length; i++) {
        // if a char is an opening bracket
        if (str[i] in conformity) {
            // then put it into stack
            stack.push(str[i])
        }
        // if a char is a closing bracket
        // then pull the last opening bracket
        // and check if it's corresponding to the current char
        else if (conformity[stack.pop()] !== str[i]) return false
    }

    // stack is empty – all good
    // and vice versa
    return stack.length === 0
}`}</Codeblock>

                    </LI>
                </UL>

                <HR />

                <P>More complicated tasks are coming up.</P>
            </Post>
        )
    }

    missing(array) {
        // the actual formula is N * (N -1) but our array is one element shy
        const sum1toN = n => n * (n + 1) / 2
        const arraySum = array.reduce((prev, curr) => prev + curr)
        return sum1toN(array.length) === arraySum ? false : sum1toN(array.length + 1) - arraySum
    }

    componentDidMount() {
        window.missing = this.missing
    }
}