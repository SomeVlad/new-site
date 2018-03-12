import Head from 'next/head'
import Link from 'next/link'
import Post from '../layouts/post'
import { H1, H2 } from '../components/post/heading'
import P from '../components/post/paragraph'
import { Image } from '../components/post/figure'
import UL, { LI } from '../components/post/list'
import Code, { Codeblock } from '../components/post/code'
import HR from '../components/post/hr'

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
                    <title>Several typical js tasks – pt. II</title>
                </Head>

                <H1>Several typical js tasks – pt. II</H1>

                <P>This is the second part (first is <Link href='/answers/'><a>here</a></Link>) of things “each
                    frontender should know”
                    according to <a
                        href="https://performancejs.com/post/hde6d32/The-Best-List-of-Frontend-JavaScript-Interview-Questions-(written-by-a-Frontend-Engineer)"
                        target="_blank" rel="noopener noreferrer">this</a> topic.</P>

                <Image src='/static/images/more-answers.png'
                       alt="I can definitely relate to that."
                       title="I can definitely relate to that." />

                <P>I’m kinda lazy to do the last two tasks, and syndrome of incomplete action{' '}
                    <Code className="highlighter-rouge">const</Code>antly doesn’t <Code
                        className="highlighter-rouge">let</Code> me sleep at night <Code
                        className="highlighter-rouge">for</Code> a <Code className="highlighter-rouge">while</Code>, so
                    I decided to publish all I’ve got
                    at this moment. Enjoy.</P>

                <H2>Implement the following functions:</H2>

                {/* TODO OL */}
                <UL>
                    <LI>
                        <P><Code>fib2</Code> - like the <Code>fib</Code> function you implemented above, able to handle
                            numbers up to 50 (hint: look up memoization).</P>

                        <P><Link href="/answers/"><a>Done already</a></Link>.</P>
                    </LI>

                    <LI>
                        <P><Code>isBalanced2</Code> - like the <Code>isBalanced</Code> function you implemented above,
                            but supports 3 types of braces: curly <Code>{'{}'}</Code>, square <Code>[]</Code>, and
                            round <Code>()</Code>. A string with interleaving braces should
                            return <Code>false</Code>.</P>

                        <P><Link href="/answers/"><a>Done already</a></Link>.</P>
                    </LI>

                    <LI>
                        <P><Code>uniq</Code> - takes an array of numbers, and returns the unique numbers. Can you do it
                            in O(N) time?</P>

                        <Codeblock>
                            {`function (array) {
    if (!Array.isArray(array)) return new Error('Not an array')
    return Array.from(new Set(array))
}`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>intersection</Code> - find the intersection of two arrays. Can you do it in O(M+N) time
                            (where M and N are the lengths of the two arrays)?</P>
                        <P>Yes, I can. I guess.</P>

                        <Codeblock>
                            {`function (firstArray, secondArray) {
     // first find 'uniq' numbers in both arrays
     const uniqFirst = this.uniq(firstArray)
     const uniqSecond = this.uniq(secondArray)

     // and return filtered array of elements found in both arrays
     return uniqFirst.length < uniqSecond.length ?
         uniqFirst.filter(num => uniqSecond.includes(num)) :
         uniqSecond.filter(num => uniqFirst.includes(num))
 }`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>sort</Code> - implement the sort function to sort an array of numbers in O(N×log(N))
                            time.</P>
                        <P>Just a merge sort. I stole it.
                            And <Link href='/semicolon/'><a>removed semicolons</a></Link>.</P>

                        <Codeblock>
                            {`function (array) {
     if (!Array.isArray(array)) return new Error('Not an array')

     function merge(listR, listL) {
         const output = []
         while (listL.length && listR.length) {
             listL[0] < listR[0] ? output.push(listL.shift()) : output.push(listR.shift())
         }
         return output.concat(listL).concat(listR)
     }

     if (array.length < 2) {
         return array;
     }

     const pivot = Math.floor(array.length / 2)
     const listL = array.slice(0, pivot)
     const listR = array.slice(pivot)

     return merge(this.sort(listL), this.sort(listR))
 }`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>includes</Code> - return <Code>true</Code> or <Code>false</Code> indicating whether the
                            given number appears in the given sorted array. Can you do it in O(log(N)) time?</P>

                        <P>Let’s apply divide and conquer paradigm.</P>

                        <UL> {/*TODO OL*/}
                            <LI>We can do dichotomous division of an initial array,</LI>
                            <LI>compare the middle element with the number we search for and then</LI>
                            <LI>repeat the procedure with the correct subarray.</LI>
                        </UL>

                        <P>Binary search basically.</P>

                        <Codeblock>
                            {`function (array) {
     if (!Array.isArray(array)) return new Error('Not an array')

     function merge(listR, listL) {
         const output = []
         while (listL.length && listR.length) {
             listL[0] < listR[0] ? output.push(listL.shift()) : output.push(listR.shift())
         }
         return output.concat(listL).concat(listR)
     }

     if (array.length < 2) {
         return array;
     }

     const pivot = Math.floor(array.length / 2)
     const listL = array.slice(0, pivot)
     const listR = array.slice(pivot)

     return merge(this.sort(listL), this.sort(listR))
 }`}</Codeblock>
                    </LI>

                    <LI>
                        <P><Code>assignDeep</Code> - like <Code>Object.assign</Code>, but merges objects deeply. For the
                            sake of simplicity, you can assume that objects can contain only numbers and other objects
                            (and not arrays, functions, etc.).</P>

                        <Codeblock>
                            {`function (target, ...sources) {
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
             if (!target[key]) Object.assign(target, {[key]: {}})
             this.assignDeep(target[key], source[key])
         // if this key is not an object
         } else {
             // just merge them the simple way
             Object.assign(target, {[key]: source[key]})
         }
     })

     // then repeat procedure with all the remaining sources
     return this.assignDeep(target, ...sources)

     function isObject(item) {
         return (item && typeof item === 'object');
     }
 }`}</Codeblock>

                        <P>Check your console to see how it works.</P>

                    </LI>
                </UL>

                <HR />

                <P>More complicated tasks are coming up. Maybe.</P>
            </Post>
        )
    }

    componentDidMount() {
        const expandedLog = obj => JSON.stringify(obj, true, 2)

        const target = { a: { b: { c: 1 } } }
        const sourceOne = { a: { b: { d: 2 } }, e: 3 }
        const sourceTwo = { a: { b: { f: 4 } }, e: 3 }
        console.log(`target is ${expandedLog(target)}\n
first source is ${expandedLog(sourceOne)} \n
second source is ${expandedLog(sourceTwo)} \n\n
result is ${expandedLog(this.assignDeep(target, sourceOne, sourceTwo))}`)
    }
}