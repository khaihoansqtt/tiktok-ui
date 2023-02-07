import { useState, useEffect, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import { PoppyWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'

import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { SearchIcon } from '~/components/Icon'
import useDebounce from '~/hooks/'
import * as searchService from '~/sevices/SearchService'
const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showSearchResult, setShowSearchResult] = useState(true)
    const [searchLoading, setSearchLoading] = useState(false)

    const inputRef = useRef()

    const debounce = useDebounce(searchValue, 700)

    useEffect(() => {
        if (debounce.trim()) {
            setSearchLoading(true)

            const fetchApi = async () => {
                try {
                    const res = await searchService.search(debounce)
                    setSearchResult(res.data)
                    setSearchLoading(false)
                } catch (error) {
                    setSearchLoading(false)
                }
            }
            fetchApi()
        }
    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideSearchResult = () => {
        setShowSearchResult(false)
    }

    const handleChange = (e) => {
        if (e.target.value === '') setSearchResult([])
        if (!e.target.value.startsWith(' ')) {
            setSearchValue(e.target.value)
        } else return
    }

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showSearchResult && searchResult.length > 0}
                interactive
                onClickOutside={handleHideSearchResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PoppyWrapper>
                            {searchResult.map((item) => (
                                <AccountItem key={item.id} item={item} />
                            ))}
                            <AccountItem />
                        </PoppyWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        required={true}
                        spellCheck={true}
                        onChange={handleChange}
                        onFocus={() => setShowSearchResult(true)}
                    />
                    {/* {searchValue && !searchLoading && ( */}
                    {true && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                    )}
                    {searchLoading && <i className={`${cx('loading')} fa-solid fa-spinner`}></i>}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search
