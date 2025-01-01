import { Button } from '@web-archive/shared/components/button'
import { useRequest } from 'ahooks'
import { ArchiveRestore } from 'lucide-react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import EmptyWrapper from '~/components/empty-wrapper'
import ListView from '~/components/list-view'
import { clearDeletedPage, queryDeletedPage, restorePage } from '~/data/page'

function Trash() {
  const { t } = useTranslation()
  const { data, run: fetchPage } = useRequest(queryDeletedPage, {
    manual: true,
  })
  const { run: runRestorePage } = useRequest(restorePage, {
    manual: true,
    onSuccess: () => {
      toast.success(t('restore-page-success'))
      fetchPage()
    },
  })
  const { run: runClearDeletedPage } = useRequest(clearDeletedPage, {
    manual: true,
    onSuccess: () => {
      toast.success(t('clear-success'))
      fetchPage()
    },
  })

  const handleClearAll = () => {
    window.confirm(t('clear-confirm')) && runClearDeletedPage()
  }

  useEffect(() => {
    fetchPage()
  }, [])

  return (
    <div className="px-2">
      <div className="m-2 flex justify-end">
        <Button variant="destructive" onClick={handleClearAll}>
          {t('clear-all')}
        </Button>
      </div>
      <EmptyWrapper empty={data?.length === 0}>
        <ListView pages={data}>
          {page => (
            <Button
              variant="link"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                runRestorePage(page.id)
              }}
            >
              <ArchiveRestore className="h-4 w-4" />
            </Button>
          )}
        </ListView>
      </EmptyWrapper>
    </div>
  )
}

export default Trash
